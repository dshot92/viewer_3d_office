<!-- ![img_4286a-350x233](public\logo_bunny.gif) -->

# <img src="public\logo_bunny.ico" width="40" height="40"> Online 3D Viewer

[Deployment Website](https://viewer-3d-one.vercel.app/)

## Ingredients

- React - A JavaScript library for building UIs
- [Three.js](https://threejs.org/) - JavaScript 3D library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js
- [@react-three/drei](https://github.com/pmndrs/drei) - Useful helpers for Fiber

## How to use

```sh
npm i
npm start
```

To add a new mesh (fbx format) append a new object with the corresponding info in:

```jsx
...
const Grid = () => {
	const items = [
        { id: 1, title: "test.fbx", description: "This is item 1.", path: "./models/test.fbx" },
        { id: 2, title: "Test_low.fbx", description: "This is item 2.", path: "./models/Test_low.fbx" },
        ...
        .
        .
        ...
        { id:, title: "<new object>", description: "<new object description>", path: "./models/<new object>.fbx" },
    ];
...
```
