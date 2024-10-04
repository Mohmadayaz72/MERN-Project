// import React from "react";
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import useImg from "../assets/profile.jpg"
import { Link } from 'react-router-dom';
import { Button } from "flowbite-react";
// import { useContext } from 'react';
// import { AuthContext } from '../contects/AuthProvider';

const SideBar = () => {
  //  const {user} = useContext(AuthContext)
    return(
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Logo href="#" img={useImg} imgAlt="Flowbite logo" className='w-12 h-12'>
        <p>{
          // user?.displayName || "Demo User"
        }
        </p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item >
          <div>
            <div style={{alignItems: 'center'}}>
                <Button color="success"><Link to='/'>Back Home</Link></Button>
            </div>
        </div>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>  
    )
}

export default SideBar