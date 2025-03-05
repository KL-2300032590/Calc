import { useState } from "react";
import image from '../assets/image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Basicoperation = () => {
    const [x, setX] = useState(100);
    const [a, setA] = useState("pardhu");
    const [y, setY] = useState(100);
    const [bool, setBool] = useState(true);
    const [arr, setArr] = useState([10,20,30,40,50]);
    const [obj, setObj] = useState({"k1":"pardhu","k2":32590});
    const [emp, setEmp] = useState([
         {"eid":90,"ename":"lile","esal":10000,"eimage":image},
         {"eid":91,"ename":"ganacahe","esal":20000,"eimage":image},
         {"eid":92,"ename":"desop","esal":30000,"eimage":image},
         {"eid":93,"ename":"smilst","esal":40000,"eimage":image},
         {"eid":94,"ename":"jest","esal":50000,"eimage":image}
    ]);

    return (
        <>
        <table border={1} cellPadding={10} cellSpacing={10}>
            <thead>
                <tr>
                    <th>eid</th>
                    <th>ename</th>
                    <th>esal</th>
                    <th>eimage</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((ele, index) => {
                        return (
                            <tr key={index}>
                                <td>{ele.eid}</td>
                                <td>
                                    <FontAwesomeIcon icon={faUser} /> {ele.ename}
                                </td>
                                <td>{`₹${ele.esal}`}</td>
                                <td>
                                    <img src={ele.eimage} width={50} height={50} alt="employee" />
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
        <p>{x + y}</p>
        <p>{a.slice(0, 4)}</p>
        <p>{JSON.stringify(bool)}</p>
        {
            arr.map((ele, index) => {
                return (<p key={index}>{index} - {ele}</p>);
            })
        }
        <p>{obj.k1}</p>
        </>
    );
}

export default Basicoperation;