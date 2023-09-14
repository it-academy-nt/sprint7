// import { useState } from "react";

type WebExtraProps = {
    spec: string;
    message: string;
    handleWebSubTotal: (spec: string, qty: number) => void;
}

const WebExtra = ({ spec, message, handleWebSubTotal }: WebExtraProps) => {
    // const [serviceQty, setServiceqty] = useState(0);
    // console.log("serviceQty: ", serviceQty)
    return (
        <div className="web-extra-item">
            <label>
                {message}
                <input min="0" type="number" onChange={(e) => handleWebSubTotal(spec, parseInt(e.target.value, 10))}/>
            </label>
        </div>
    )
}

export default WebExtra