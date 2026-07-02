import "./GlassPackage_Taller.css";

function GlassPackage_Taller({ children }) {
  return (
    <div class="glass-package-taller">
        <svg viewBox="0 0 280 340" class="glass-package-svg" xmlns="http://www.w3.org/2000/svg">
            <polygon
            points="50,35 250,35 215,60 15,60"
            className="glass-top-face"
            />

            <polygon
            points="15,60 215,60 215,300 15,300"
            className="glass-front-face"
            />

            <polygon
            points="215,60 250,35 250,275 215,300"
            className="glass-right-face"
            />

            <line
            x1="55"
            y1="40"
            x2="240"
            y2="40"
            className="glass-highlight"
            />
        </svg>
        
        <div class="glass-package-content-taller">
            {children}
        </div>
    </div>

  );
}

export default GlassPackage_Taller;