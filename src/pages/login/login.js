import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DataRendering from 'util/datarender';

const serverIp = process.env.REACT_APP_SERVER_IP;
const crmServerIp =  process.env.CRM_DEV_SERVER_IP;
const Login = () => {

    const [inputs, setInputs] = useState({
        id: '',
        password: ''
      });
    
    // 클래스형 컴포넌트의 componentDidMount + componentDidUpdate
    useEffect(() => {
        console.log({id})
        console.log({serverIp});
        console.log({crmServerIp});
    });

    // componentDidMount
    useEffect(() => {
        initialData();
    },[]);

    // server data get
    const initialData = async () => {
        fetch(serverIp + "/SmsCustMemberDetail", {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'basic bzNwbF91c2VyOmVhaV9vM3BsQGZuZmNvcnA=',
                'Accept' : '*/*, text/plain'
            },
            body: JSON.stringify(
                {"REQUEST":
                    {
                        "V_CID" : "X0901269"
                    }
                }
            )
          })
          .then(res => res.json())
          .then(res => {
            if (res.success) {
                alert("저장 완료");
            }
          })

        // const res = fetch(crmServerIp + "/SmsCustMemberDetail", {
        //     method: 'post',
        // });
        // const initialData = await res.json();
        // setInputs(initialData);
    }

    // componentDidMount 처럼 사용
    // useEffect 안에 콜백 함수를 넣어준다!
    // useEffect(() => {
    //     console.log('마운트 될 때만 실행됩니다.');
    // }, []);

    const { id, password } = inputs; 

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    return(
        <div>
            <input name="id"  onChange={onChange} value={id}/>
            <input name="password" value={password} />
            <div>id = {id}</div>
        </div>
    );
}

export default Login;