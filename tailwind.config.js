module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        copperplate: "Copperplate Gothic",
        lusitana: "Lusitana",
        helvetica: "Helvetica Neue",
        poppins: "Poppins",
      },
      fontSize: {
        "semi-sm": "0.925rem",
        "semi-lg": "1.1rem",
        "semi-xl": "1.175rem",
        "1.25xl": "1.215rem",
        "1.5xl": "1.375rem",
        "2.25xl": "1.45rem",
        "2.5xl": "1.6875rem",
      },
      borderWidth: { 3: "3px" },
      backgroundImage: {
        meeting: "url('resources/meeting.jpeg')",
        directors: "url('resources/directors.jpeg')",
        laughing: "url('resources/laughing.jpeg')",
        teamTwo: "url('resources/teamtwo.jpg')",
        leadership: "url('resources/leadership.jpeg')",
        terrace: "url('resources/terrace.jpeg')",
        bull: "url('resources/bull.jpeg')",
        education: "url('resources/education.png')",
        berkeley: "url('resources/berkeley.jpeg')",
        analyst: "url('resources/analyst.jpeg')",
        women: "url('resources/women.jpg')",
      },
      colors: {
        darken: "rgba(0, 0, 0, 0.4)",
        "darken-slightly": "rgba(0, 0, 0, 0.55)",
        "darken-more": "rgba(0, 0, 0, 0.7)",
      },
      height: {
        section: "850px",
        "section-lite": "650px",
        "screen-125": "125vh",
        "mini-section": "500px",
        header: "400px",
      },
      backgroundPosition: {
        "center-14": "center -14rem",
        "center-45": "center 45rem",
      },
      screens: {
        mini: "460px",
        sm: "576px",
        "semi-md": "760px",
        md: "960px",
        "semi-md-lg": "1100px",
        "semi-lg": "1225px",
        lg: "1440px",
      },
      padding: {
        gallery: "275px",
        "gallery-mini": "350px",
      },
      margin: {
        gallery: "275px",
        "gallery-mini": "350px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
