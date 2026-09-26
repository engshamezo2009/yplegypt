import "../styles/water-loader.css";

export default function WaterBucketLoader({ isLoading = true }) {
  return (
    <div
      className={`water-loader ${
        isLoading ? "water-loader-loading" : "water-loader-finishing"
      }`}
    >
      <div className="water-loader-overlay" />

      <div className="water-loader-scene">
        <div className="water-loader-bucket">
          <svg
            className="water-loader-svg"
            viewBox="0 0 240 280"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="bucket-glass-gradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#b8e8f5" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="water-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#75d8f5" />
                <stop offset="100%" stopColor="#1976b5" />
              </linearGradient>

              <linearGradient id="water-highlight" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>

              <clipPath id="bucket-clip">
                <path
                  d="
                    M42 78
                    L198 78
                    L181 242
                    Q178 255 164 258
                    L76 258
                    Q62 255 59 242
                    Z
                  "
                />
              </clipPath>
            </defs>

            <path className="bucket-handle" d="M55 86 C30 28 210 28 185 86" />

            <g clipPath="url(#bucket-clip)">
              <rect
                className="bucket-water"
                x="35"
                y="78"
                width="175"
                height="180"
              />

              <path className="water-highlight" d="M72 105 L84 228" />

              <path className="water-highlight-small" d="M94 101 L99 170" />
            </g>

            <path
              className="bucket-body"
              d="
                M42 78
                L198 78
                L181 242
                Q178 255 164 258
                L76 258
                Q62 255 59 242
                Z
              "
            />

            <path
              className="bucket-inner-glow"
              d="
                M54 91
                L186 91
                L171 235
                Q168 245 158 247
                L82 247
                Q72 245 69 235
                Z
              "
            />

            <path
              className="bucket-rim"
              d="
                M37 76
                Q120 61 203 76
                L200 91
                Q120 77 40 91
                Z
              "
            />

            <path className="bucket-reflection" d="M68 103 L80 224" />

            <path className="bucket-reflection-small" d="M88 101 L94 156" />
          </svg>
        </div>
      </div>
    </div>
  );
}
