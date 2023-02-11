import smartgrid from 'smart-grid'
/* It's principal settings in smart grid project */
const settings = {
  outputStyle: 'scss' /* less || scss || sass || styl */,
  columns: 12 /* number of grid columns */,
  offset: '15px' /* gutter width px || % || rem */,
  mobileFirst: true /* mobileFirst ? 'min-width' : 'max-width' */,
  container: {
    maxWidth: '1920px' /* max-width оn very large screen */,
    fields: '15px' /* side fields */,
  },
  breakPoints: {
    bp1440: {
      width: '1399px',
    },
    bp1100: {
      width: '1099px',
    },
    bp994: {
      width: '993px',
    },
    bp768: {
      width: '767px',
    },
    bp480: {
      width: '479px',
    },
    bp320: {
      width: '319px',
    },
  },
}

smartgrid('./src/style/lib', settings)
