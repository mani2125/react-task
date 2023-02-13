import React, { useEffect, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Modal  } from 'antd';
import { useAppContext } from '../../Store'
import { getProfile, requestAuthor, requestQuotes } from "./service";
import './profile.scss'

interface IProfile{
  fullname: string;
  email: string;
}
export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [authorStatus, setAuthorStatus] = useState<string>("");
  const [quotesStatus, setQuotesStatus] = useState<string>("");
  const { store: { token } } = useAppContext();
  const [profileDate, setProfileDate] = useState<IProfile>({ fullname: "", email: "" });

  useEffect(() => {
    getProfile(token).then((res) => {
      const data = res.data
      if(data.fullname && data.email){
        setProfileDate({fullname: data.fullname, email: data.email})
      }
    })
    
  }, []);

  const handleCancel = async () => {
    setIsModalOpen(false)
  };
  const handleClick = async () => {
    setIsModalOpen(true)
    setAuthorStatus("inprogress")
    const res = await requestAuthor(token)
    if(res.success){
      setTimeout(()=>{
        setAuthorStatus("completed")
        setQuotesStatus("inprogress")
      },3000)
      
      const authorId = res.data.authorId
      
      setTimeout(async ()=>{        
        const res1 = await requestQuotes(token, authorId)
        if(res.success){
          setQuotesStatus("completed")
        }
      }, 7000)
      }
  };
const modalTitle = authorStatus === "inprogress" ? "author": "quote"
  return (
    <div className='profile-container'>
      <Avatar size={64} icon={<UserOutlined />} />
      <div className='profile-info'>
        <div className='prfile-title'>Welcome, {profileDate.fullname}!</div>
        <Button type="primary" onClick={handleClick}>
          Update
        </Button>
      </div>
      {isModalOpen &&
        <Modal
          title={"Requesting the " + modalTitle + ""}
          open={true}
          onCancel={handleCancel}
          closable={false}
        >
          {(authorStatus === "inprogress" || authorStatus === "completed" ) &&
            <div>Step1: 
              {authorStatus === "inprogress" &&
                <span>Requesting author...</span>
              }
              {authorStatus === "completed" &&
                <span>Completed</span>
              }
            </div>
          }
          {(quotesStatus === "inprogress" || quotesStatus === "completed" ) &&
            <div>Step2: 
              {quotesStatus === "inprogress" &&
                <span>Requesting quote...</span>
              }
              {quotesStatus === "completed" &&
                <span>Completed</span>
              }
            </div>
          }
        </Modal>
      }
      
    </div>
  );
}
