/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      colors: {
        "primary":"#01142c",
        "secondary":"#021d41",
        "secondary-op":"#0026577a",
        "secondary-dark":"#002657",
        "secondary-light":"#09285b",
      },
      gridTemplateColumns: {
        // added new column grid 
        'lg-col': 'repeat(6, minmax(150px, 1fr))',
        'xm-col': 'repeat(1, minmax(150px, 250px))',
        
      },
      
      backgroundImage: (theme) => (
        {
          'image-border-gradiant': "linear-gradient(rgb(32, 59, 128), rgb(137, 69, 142)), linear-gradient(rgb(137, 69, 142), rgb(137, 69, 142)), linear-gradient(rgb(138, 82, 187), rgb(138, 82, 187)), linear-gradient(rgb(69, 70, 85), rgb(69, 70, 85))",
          
          'active-item-bg':"radial-gradient(at 225px 225px, rgb(3, 28, 64) 40%, rgb(4, 20, 47), rgb(5, 24, 56))"
        }),
      
      backgroundSize: {
          '50%': '50%'
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      }
    },
  },
  plugins: [],
}

