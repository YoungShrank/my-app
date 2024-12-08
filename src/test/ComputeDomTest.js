// 测试计算出的Dom，比如条件，重复
function computeDomTest(data) {
    let yxk = {name: "yxk", age: 18, gender: "male"}
    let lsy = {name: "lsy", age: 19, gender: "male"}
    let yck = {name: "yck", age: 20, gender: "male"}
    let zjm = {name: "zjm", age: 21, gender: "male"}
    let trump = {name: "trump", age: 75, gender: "female"}
    let biden = {name: "biden", age: 70, gender: "male"}
    let candidates = [yxk, lsy, yck, zjm, trump, biden]

    let styleOfItem = {backgroundColor: "lightblue", margin: "20px 20px "}
    let styleOfItemContent = {backgroundColor: "lightblue", marginLeft: "10%  "}
    let styleOfPerson = {backgroundColor: "lightgreen", padding: "10px", margin: "10px 400px"}
    let styleOfContainer = {backgroundColor: "lightgray", padding: "10px", margin: "10px"}
    let flexContainer = {display: "flex", alignItems: "center"}

    function renderItem(keyText, value, editable = false) {
        return (
            <div style = {styleOfItem}>
                <div style={styleOfItemContent}>
                    <div style= {{...flexContainer}}>
                        <div>{keyText}：</div>
                        { editable ? <input type="text" defaultValue ={value}></input> : <div>{value}</div>}
                    </div>
                </div>
            </div>
        )
    }

    function renderCheckBoxItem( value) {
        return (
            <div style = {styleOfItem}>
                <div style={styleOfItemContent}>
                    <div style= {{...flexContainer}}>
                        <input type="checkbox" ></input>
                        {value}
                    </div>
                </div>
            </div>
        )
    }

    function renderIndex(value) {
        let styleOfIndex = {padding: "2px", border : "1px solid black", margin: "2px 2px"}
        return (
            <div style={styleOfIndex}>
                {value}
            </div>
        )
    }

    /**
     * 行数据视图：由若干组件排成一行
     */
    class RowDataView {
        constructor(props) {
            this.styles = {
                styleOfContainer: {backgroundColor: "lightgray", padding: "0px"},
                styleOfFlex : {display: "flex", alignItems: "center", margin: "0px 0px"},
                styleOfAlign: {marginLeft: "10%" }
            }
            this.props = props
            
        }
        render() {
            return (
                <div style={styleOfItem}>
                    <div style={{...(this.styles.styleOfContainer),...(this.styles.styleOfFlex),...(this.styles.styleOfAlign)}}>
                        {Object.values(this.props).map((v) => {
                            return v;
                        })}
                    </div>
                </div>
            )
        }
    }

    return (
        <div style={styleOfContainer}>
            {candidates.map((item, index) => {
                return (
                    item.gender === "male" && 
                    <div key={item.name} style={styleOfPerson}>
                        {renderItem("姓名", item.name)}
                        {renderItem("年龄", item.age, true)}
                        {renderItem("性别", item.gender)}
                        {new RowDataView({
                            index: renderIndex(index+1), 
                            lable: <div>是否投票</div>, 
                            selected :<input type="checkbox" ></input>,
                            comment : <input type="text" ></input>,
                            delete: <button>删除</button>
                            }).render()}
                    </div>
                )
            })}
        </div>
    )
}

export default computeDomTest