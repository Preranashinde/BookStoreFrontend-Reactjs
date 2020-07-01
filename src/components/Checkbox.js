// import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';

// export default function Checkboxes() {
//   const [checked, setChecked] = React.useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <div>
//       <Checkbox
//          checked={checked}
//         onChange={handleChange}
//         inputProps={{ 'aria-label': 'primary checkbox' }}
//       />
//       {/* <Checkbox
//         defaultChecked
//         color="primary"
//         inputProps={{ 'aria-label': 'secondary checkbox' }}
//       /> */}
//       {/* <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
//       <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
//       <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} /> */}
//       {/* <Checkbox
//         defaultChecked
//         indeterminate
//         inputProps={{ 'aria-label': 'indeterminate checkbox' }}
//       />
//       <Checkbox
//         defaultChecked
//         color="default"
//         inputProps={{ 'aria-label': 'checkbox with default color' }}
//       />
//       <Checkbox
//         defaultChecked
//         size="small"
//         inputProps={{ 'aria-label': 'checkbox with small size' }}
//       /> */}
//     </div>
//   );
// }


import React from 'react';
//import { withStyles } from '@material-ui/core/styles';
//import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        
      />
      
    </FormGroup>
  );
}
