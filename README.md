# 🌌 Three.js Wireframe Wormhole Visualization || 🚀✨

This project visualizes a wireframe wormhole using `Three.js`, featuring an interactive spline-based tube geometry with stunning post-processing effects like bloom. The camera flies through the wormhole, with dynamic elements like wireframe boxes and fog creating an immersive 3D experience. 💫

## ✨ Features
- **🌀 Wireframe Wormhole**: Crafted using tube geometry from a custom spline.
- **🌟 Bloom Effect**: Glowing visuals applied with `UnrealBloomPass`.
- **📦 Dynamic Boxes**: Randomly placed wireframe boxes along the wormhole path.
- **🎛️ Interactive Controls**: Adjust tube color, bloom intensity, fog density, and more with `lil-gui`.
- **🎥 Smooth Camera Motion**: Seamless animation along the wormhole's path.
- **🌫️ Fog**: Adds depth and atmosphere with adjustable density.

## 🛠️ Technologies Used
- **🔧 Three.js**: Core 3D rendering engine.
- **🔀 Spline.js**: Generates the tube's path for the wormhole.
- **🕹️ OrbitControls**: Smooth camera control for the user.
- **🎬 EffectComposer**: Manages post-processing effects like bloom.
- **💡 UnrealBloomPass**: Adds glowing effects to the scene.
- **🖱️ lil-gui**: Real-time GUI for adjusting scene parameters.
- **⚡ Vite**: Fast build tool for efficient bundling and serving.

## 🚀 Getting Started

### Prerequisites
- **🖥️ Node.js** (v14 or above)
- **⚡ Vite** (installed globally)

### Installation
1. **📥 Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/wireframe-wormhole-visualization.git
   cd wireframe-wormhole-visualization
   ```

2. **📦 Install the dependencies**:
   ```bash
   npm install
   ```

3. **💻 Run the development server**:
   ```bash
   npm run dev
   ```

4. **🌍 Open your browser** and navigate to `http://localhost:3000` to see the visualization in action.

### ⚙️ Build for Production
To build the project for production:
```bash
npm run build
```

## 🔧 How It Works
- **🌐 Scene Setup**: A `THREE.Scene()` is created with a camera positioned in front of the wormhole.
- **🔀 Spline Path**: A spline generates the path for the tube geometry, forming the wormhole.
- **📦 Tube and Boxes**: The wormhole is made of tube geometry with random wireframe boxes placed along its path.
- **🎬 Post-Processing**: Bloom effects are applied using `EffectComposer` and `UnrealBloomPass` for a glowing effect.
- **🎥 Dynamic Camera**: The camera follows the spline path, creating a smooth flying-through effect.
- **📱 Responsive**: Adjusts for window resize events to maintain proper camera and renderer dimensions.

## 🎛️ Interactive Controls
Customize your experience with these adjustable parameters via the GUI:
- **🎨 Tube Color**: Change the color of the wireframe tube.
- **💡 Bloom Strength**: Control the intensity of the bloom effect.
- **🔧 Bloom Threshold & Radius**: Fine-tune the glow effects for a perfect look.
- **🌫️ Fog Density**: Modify the scene’s fog to add depth and atmosphere.
- **⚡ Speed**: Adjust the speed at which the camera moves through the wormhole.

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
Check out the live demo [here](#) 🌍 (add your Netlify or GitHub Pages link).

## 🤝 Contributing
Contributions are welcome! 🙌 Feel free to open an issue or submit a pull request for any improvements or bug fixes. 💡

## 📄 License
This project is licensed under the MIT License 📜.

---

Enjoy flying through the wormhole! 🚀👾✨
