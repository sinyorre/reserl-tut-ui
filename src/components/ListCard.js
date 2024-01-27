const ListCard = (props) => {
    const {data} = props;

    return (
        <div style={{height: 300, border: 'solid 0.1px'}}>
            {
                data.map(item => {
                    const {title, description} = item;
                    return (
                        <div>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ListCard;