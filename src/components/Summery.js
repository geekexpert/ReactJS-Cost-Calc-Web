export const Summery = ({DataTotal,DataRecur}) => {
    return (
        <div className="total-wrap">
            <h5>Summery</h5>
            <div className="summery-flex">
                <div className="summery-first">
                    <div className="summery-left">
                        <span>First Total</span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="summery-right">
                        <span>{DataTotal}</span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="summery-last">
                    <div className="summery-left">
                        <span>{DataRecur}</span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="summery-right">
                        <span>{DataTotal+DataRecur}</span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Summery;