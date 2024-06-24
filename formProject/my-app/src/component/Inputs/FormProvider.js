import { FormProvider as Form} from "react-hook-form";



export default function FormProvider  ({ children, onSubmit, methods , ...rest }) {  
    return (
        <Form {...methods}>
            <form data-testid="form" onSubmit={onSubmit} {...rest}>{children}</form>
        </Form>
    );
};