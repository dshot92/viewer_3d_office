<!-- ![img_4286a-350x233](public\logo192.jpg) -->

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
        { id: 1, name: "test.fbx", path: "./models/test.fbx" },
        { id: 2, name: "Test_low.fbx", path: "./models/Test_low.fbx" },
        ...
        .
        .
        ...
        { id: N, name: "<new object>", path: "./models/<new object>.fbx" },
    ];
...
```

## Billboards

Add Objects in the fbx with this naming scheme:

```
billboard${Name}
```

