const Spinner = ({mssg}) => {
    return ( 
        <div className="ui segment">
        <div className="ui active dimmer">
            <div className="ui text loader">{mssg}</div>
        </div>
        <p></p>
        </div>
     );
}
Spinner.defaultProps={
    mssg:"Loading...",
}
export default Spinner;