import "./GlassPackage.css";

function GlassPackage({ children }) {
  return (
    <div className="glass-package">
      <svg 
        viewBox="0 0 460 180" 
        class="glass-package-svg" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* top face */}
        <polygon
            points="50,15 440,15 405,40 15,40"
            className="glass-top-face"
        />

        {/* front face */}
        <polygon
            points="15,40 405,40 405,165 15,165"
            className="glass-front-face"
        />

        {/* top face */}
        <polygon
            points="405,40 440,15 440,140 405,165"
            className="glass-right-face"
        />

        <line
            x1="55"
            y1="20"
            x2="430"
            y2="20"
            className="glass-highlight"
        />
      </svg>

      <div className="glass-package-content">
        {children}
      </div>
    </div>
  );
}

export default GlassPackage;

