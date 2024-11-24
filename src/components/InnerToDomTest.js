function InnerToDomTest() {
    const listData = [1, 2, 3, 4, 5];
    const basicData = "This is a basic data";
    const isShow = true;
    console.log("isShow: " + isShow);

    const listItems = listData.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    const jsxData = <div>JSX Data</div>

    return (
        <div>
            <h1>InnerToDomTest</h1>
            <p>{basicData}</p>
            {isShow && <ul>{listItems}</ul>}
            {jsxData}
            {isShow}
        </div>
    )
}

export default InnerToDomTest;