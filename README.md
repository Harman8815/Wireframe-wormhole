# 🌌 Three.js Wireframe Wormhole Visualization || 🚀

This project visualizes a wireframe wormhole using `Three.js`, with an interactive spline-based tube geometry and various post-processing effects like bloom. The camera follows a smooth path through the wormhole, and additional visual elements like dynamic boxes and fog create a compelling 3D scene. 

## ✨ Features
- **Wireframe Wormhole**: Built with `Three.js` using tube geometry from a custom spline.
- **Bloom Effect**: Applied using `UnrealBloomPass` for a glowing visual effect.
- **Dynamic Boxes**: Wireframe boxes randomly positioned along the wormhole path.
- **Interactive Controls**: Adjust tube color, bloom strength, fog density, and more with `lil-gui`.
- **Smooth Camera Motion**: Animates smoothly along the wormhole path.
- **Fog**: Adds a depth effect to the scene with adjustable density.

## 🛠️ Technologies Used
- **Three.js**: Core 3D engine for rendering.
- **Spline.js**: Generates the tube path for the wormhole.
- **OrbitControls**: Allows smooth user control of the camera.
- **EffectComposer**: Handles post-processing like bloom.
- **UnrealBloomPass**: Adds glow effects to the scene.
- **lil-gui**: GUI for adjusting scene parameters in real-time.
- **Vite**: Fast build tool for bundling and serving the project.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or above)
- Vite (installed globally)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wireframe-wormhole-visualization.git
   cd wireframe-wormhole-visualization
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the visualization in action.

### Build for Production
To build the project for production:
```bash
npm run build
```

## 🔧 How It Works
- **Scene Setup**: A `THREE.Scene()` is created with a camera positioned in front of the wormhole.
- **Spline Path**: A spline is used to generate the path for the tube geometry, which forms the wormhole.
- **Tube and Boxes**: The wormhole is made of tube geometry with random wireframe boxes placed along its path.
- **Post-Processing**: Bloom effects are applied using `EffectComposer` and `UnrealBloomPass` for a glowing effect.
- **Dynamic Camera**: The camera follows a point along the spline, creating a smooth flying-through effect.
- **Responsive**: The project listens for window resize events to adjust the camera and renderer accordingly.

## 🎛️ Interactive Controls
You can adjust various parameters using the GUI:
- **Tube Color**: Change the color of the wireframe tube.
- **Bloom Strength**: Control the intensity of the bloom effect.
- **Bloom Threshold & Radius**: Fine-tune the bloom effect.
- **Fog Density**: Adjust the scene's fog for a more immersive experience.
- **Speed**: Modify the speed at which the camera moves through the wormhole.

## 📂 Project Structure
```
/project-root
├── public/               # Static assets like images
├── src/                  # Source code
│   ├── spline.js         # Spline generation file
│   ├── main.js           # Main JS file
│   └── index.html        # Main HTML file
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

## 🌐 Live Demo
Check out the live demo [here](#) (add your Netlify or GitHub Pages link).

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request for any improvements or bug fixes.

## 📄 License
This project is licensed under the MIT License.

---

Enjoy exploring the wormhole! 👾
