# About Redux
[![Japanese](https://img.shields.io/badge/lang-ja-yellow.svg)](https://github.com/r-kataoka11/liff-template/blob/master/src/ducks/README.md)

This project uses the Re-ducks pattern. Please refer to the following for the file structure.

## File structure

- ducks/
  - hoge/: Cut a directory for each domain.
    - hogeApi.ts: Endpoint for each domain of RTK Query
    - hogeSlice.ts: Slice for each domain (Actions and Reducers are grouped together)
    - hogeThunk.ts: Thunk for each domain (asynchronous API processing, functions with side effects, etc.)
    - hogeInterface.ts: Types for each domain.
    - hogeSelector.ts: Selector for each domain.
  - baseApi.ts：The base API for RTK Query.
  - store.ts：Associate each Reducer to a Store.

## How to Add Slice

1. Cut a directory for each domain under ducks.
2. Create domain related types in `hogeInterface.ts` 
3. Create a Slice in `hogeSlice.ts` with [createSlice](https://redux-toolkit.js.org/api/createslice). 
4. Create a Selector for each data to be used in `hogeSelector.ts`. 
5. Add the reducer of `hogeSlice.ts` to the reducer of `store.ts`.

## About Immer

The Redux Toolkit includes [Immer](https://immerjs.github.io/immer/).

Immer makes it easy to write code that protects immutability by preventing unauthorized updates when rewriting certain data trees.

The benefit of Immer is that you can simply write a reducer as follows:

```typescript
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) { state.value
      state.value--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})
```

## About Reselect

The Redux Toolkit includes [Reselect](https://github.com/reduxjs/reselect).

Reselect is a library for creating memoized Selector functions.

The advantages are:
- You can create a Selector that retrieves the computed derived data. Redux only needs to store the minimum number of States.
- Selector will not be recalculated unless the dependent State is changed. It is efficient.
- Created Selector can be used as an argument for other Selectors.

This is useful, for example, when you want to filter state A by state B (e.g., extract the selected list A only with tags that match the selected tag B).

- The process of recalculating and retrieving data can be delegated to Selector itself that means developers don't need to use useMemo or other methods.
- No need to create a useState to handle derived data.
- Memoization on the Selector side makes it easy to control re-rendering.
- Easy to maintain because all the process of getting state is centralized in `hogeSelector.ts`.
- The component only needs to change its behavior depending on the state received by the Selector, so the responsibility is divided.
- Easy to test the state.

## About LIFF initialization and login process

The initialization, login, and logout of LIFF is done in Redux.

### About authThunk.ts.

We use `/src/ducks/auth/authThunk.ts` to do LIFF-related asynchronous processing.

#### About `initLiff` 

1. run `liff.init()` 
2. run `liff.login()` if the user is not logged in (because the behavior is different between LIFF browser and external browser).
If the user is already logged in, pass the user's profile information to payload.

#### About logoutLiff

It simply runs `liff.logout() `.

### About authSlice.ts

The state of `/src/ducks/auth/authSlice.ts` is changed according to the processing status of LIFF-related asynchronous processing (processing, completed, and error).

Each page will not be displayed until loading is completed.

In the case of an error, the error content is placed in the error field. It'd be kind to the users if the developers can display those error messages in front-end.

If the user is already logged in, the profile contains the user's profile information. This can be used for authorization and other purposes.

Currently, the only way to update the access token in the LIFF SDK is to do `liff.init()` and `liff.logint()`, so the best way to determine the access token is to check the API response for errors.

Depending on the error content, it may be better to display error messages or dispatch `initLiff`.

## About RTK Query

The Redux Toolkit includes a feature called [RTK Query](https://redux-toolkit.js.org/rtk-query/overview).

RTK Query is a tool that includes cooperative data fetching and caching features commonly used in web applications, so you don't have to write those functions by yourself.

### Features

- Built with reference to Apollo client, React Query, Urql, SWR, etc.
- Supports REST API and GraphQL.
- UI-independent (since it's not running on React).
- Excellent caching (e.g., after a POST or PUT, it will re-fetch the data related to the change).
- Custom hooks for data exchange are automatically generated for each endpoint (custom hooks can be used to get data, loading status, etc.).

### Benefits of Using Redux

You can use `extraReducers` to change the state of a specific endpoint depending on its state (being retrieved, already retrieved, error).

For example, it is possible to display a snackbar to notify after a data change.

### About API Connection

The followings are explanation based on the sample code of RTK Query.

In `/src/ducks/baseApi.ts`, `baseApi` is used to create the base API connection.

- `baseQuery` is used to include the LIFF accessToken in the header of each request.
- The `endpoints` is empty because it's a required field, and we'll add an endpoint for each domain that uses the Re-ducks pattern.
- The `tagTypes` field is used to register tags which will be used to re-fetch the data of queries with matching tags after mutation is executed.

You can add an Endpoint by cutting a directory for each domain and doing `injectEndpoints` for `baseApi`.

This template includes sample code to add an Endpoint for a fictional posting API in `postsEndpoints` in `/src/ducks/posts/postsApi.ts`.

There are two Endpoints in RTK Query, `query` and `mutation`.

The `query` is an Endpoint for retrieving data, and the `mutation` is an Endpoint for modifying data.

We add `Posts` to the `invalidatesTags` of `mutation`, and we add `providesTags` to `query`.

This will cause the data retrieved by `getPostList` to be re-fetched after `addPost`.
