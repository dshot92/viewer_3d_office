<!-- ![img_4286a-350x233](public\logo192.jpg) -->

# <img src="public\logo192.jpg" width="40" height="40"> Viewer-3D

[Website Production](https://viewer-3d-one.vercel.app/)
[Website Development](https://viewer-3d-git-development-dshot92.vercel.app/)

## Ingredients

- [React](https://reactjs.org/) - JavaScript 3D library
- [Three.js](https://threejs.org/) - JavaScript 3D library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - A React renderer for Three.js
- [React Three Drei](https://github.com/pmndrs/drei) - Useful helpers for Fiber

## Usages

### Install

Install dependencies

```sh
npm i
```

### How to run

**Local server** in browser:

```sh
npm start
```

## How to use

### Add Models

Paste fbx model in `public/models/` and edit the model list in `src/Grid.jsx` :

```jsx
// Grid.jsx
export const itemsList = () => {
    return [
        { name: "Parco Monteclaro", fbxPath: "/models/Parco Monteclaro.fbx"},
        .
        .
        .
        .
        { name: "<new object>", path: "./models/<new object>.fbx" },
    ];
};

```

### Billboards

Add Objects in the fbx with this naming scheme

(using Blender is best to set mesh and billboards in separate **Collections**):

```txt

Collection_Mesh
    - MeshObject

Collection_Billboards
    - billboard${Name_0}
    - ...
    - billboard${Name_N}
```
