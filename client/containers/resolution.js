import { createContainer } from 'meteor/react-meteor-data';

export default ResolutionContainer = createContainer(() => {
   return {
       resolution: Resolutions.find({}).fetch(),
   } 
});