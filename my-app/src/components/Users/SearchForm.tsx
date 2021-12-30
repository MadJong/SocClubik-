import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

type PropsType = {
  onFilterChanged: (filter:any) => void
}
const SearchForm: React.FC<PropsType> = ({onFilterChanged}) => {
    const usearsSearchForm = () => {
        const errors = {};
         return errors;
    }
    const submit = (values:any, { setSubmitting }: any) => {
          //alert(JSON.stringify(values, null, 2));
          //setSubmitting(false);
          

          //У нас тут порнография с values, так как там не настоящие null false и true, а строчные, то есть 'null', 'false', 'true'
          // Можно самому ковертировать их в правильные типы выше, но пока работает так.
          onFilterChanged(values);
          setSubmitting(false)
      
      }
    return (
        <div>
            <Formik
       initialValues={{ term: '', friend: null }}
       validate={usearsSearchForm}
       onSubmit={submit}
     >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="term" />
           <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Onky followed</option>
              <option value="false">Only unfolowed</option>
            </Field>
           <button type="submit" disabled={isSubmitting}>
             Find
           </button>
         </Form>
       )}
     </Formik>
        </div>
    )
}

export default SearchForm