// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsSupplierSeparator from 'src/views/form-layouts/FormLayoutsSupplierSeparator'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        
        <Grid item xs={12}>
          <FormLayoutsSupplierSeparator />
        </Grid>
        
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
