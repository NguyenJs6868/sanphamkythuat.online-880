"use client"

import React, { Fragment, useEffect, useState } from 'react';
import './minmap-list.scss';
import Link from 'next/link';
// import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
import Loading from '~/components/Loading';
import ModalConfirmDelete from '~/components/ModalConfirmDelete';
import { getMindmaps } from '~/services/apiMindmap';



const api = process.env.NEXT_PUBLIC_API;

function MindmapListComponent({ session }) {
  // console.log('MindmapListComponent session', session);
  // const fetchApi = `${api}/mindmaps?user_id=${user?.sub}`;
  const [loading, setLoading] = useState(false);
  const [dataMaps, setDataMaps] = useState([]);
  const [idRemove, setIdRemove] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);


  const router = useRouter();

  const data = [
    {
      id: 1,
      name_mindmap: 'Mindmap 1',
      create_at: '20/11/2023 23:54:26',
      description: 'Description',
    },
    {
      id: 2,
      name_mindmap: 'Mindmap 2',
      create_at: '20/12/2023 23:54:26',
      description: 'Description 2',
    },
  ];

	const [ loaddding, setDidLogin ] = useState(true);

  async function createMindMap() {
    const randomMindMapId = uuidv4();
    // console.log('randomMindMapId', randomMindMapId);
    if (randomMindMapId) {
      router.push(`/my-mindmap/${randomMindMapId}`);
      // redirect(`/my-mindmap/${randomMindMapId}`);
    }
  };

  function handleEditMindmap(id) {
    console.log('handleEditMindmap', id);
  }
  function handleDelelteMindmap(id) {
    console.log('handleDelelteMindmap', id);
  }

  // const getUsers = async () => {
  //   const res = await fetch(`https://f86wpp-8080.csb.app/users`);
  //   const users = await res.json();
  //   console.log(users);
  // }
  // getUsers()

	return (
    <>
      <div className='container mindmap-list-component'>
        <div>
          <h1>Mindmap của tôi</h1>
        </div>

        <button onClick={createMindMap} type="button" class="btn btn-primary create-mindmap">
          {/* <Link href={`/my-mindmap/0`} >Thêm mới</Link> */}
          Thêm mới
        </button>


        <table class="table mindmap-list-table">
          <thead>
            <tr>
              <th scope="col">
                <input className="form-check-input" type="checkbox" value="" id="1" />
              </th>
              <th scope="col">TÊN</th>
              <th scope="col">TẠO LÚC</th>
              <th scope="col">HÀNH ĐỘNG</th>
            </tr>
          </thead>

          <tbody>

            { data && data.map((item) => {
              return (
                <Fragment>
                  <tr key={item.id} className='mindmap-item'>
                    <th scope="row">
                      <input className="form-check-input" type="checkbox" value="" id="1" />
                    </th>
                    <td>
                      <div>
                        <div><Link href={`/my-mindmap/${item.id}`}>{item.name_mindmap}</Link></div>
                        <div>{item.description}</div>
                      </div>
                    </td>
                    <td>{item.create_at}</td>
                    <td>
                      <button onClick={() => handleEditMindmap(item.id)}>Edit</button>
                      <span>{' '}</span>
                      <span>{' '}</span>
                      <button onClick={() => handleDelelteMindmap(item.id)}>Delelte</button>
                    </td>
                  </tr>
                </Fragment>
              )
            })

            }


          </tbody>
        </table>
        {loading && (
          <div
            className={`fixed opacity-60 bg-white w-full top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center h-full `}
          >
            <Loading />
          </div>
        )}
        {showConfirm && (
          <ModalConfirmDelete
            onLoading={setLoading}
            onRemove={setDataMaps}
            dataMaps={dataMaps}
            id={idRemove}
            onShowConfirm={setShowConfirm}
          />
        )}

		</div>
    </>

	);
}

export default MindmapListComponent;
