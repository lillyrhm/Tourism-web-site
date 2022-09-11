import { useNavigate } from "react-router-dom";

export default function Invoices() {
    let navigate = useNavigate();
    return (
        <div>
            <NewInvoiceForm
                onSubmit={async (event) => {
                    let newInvoice = await createInvoice(
                        event.target
                    );
                    navigate(`/invoices/${newInvoice.id}`);
                }}
            />
        </div>
    );
}