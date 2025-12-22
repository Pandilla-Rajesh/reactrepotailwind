import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export const Home = () => {
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    try {
      axios.get(baseURL).then((response) => {
        setPost(response?.data);
        console.log(response?.data, 'dummy API')
      });
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }, []);

  return (
    <section className=''>
      <div className=" container-fluid">
        <div className='grid grid-cols-1 py-5'>
          { loading ? (
            <p>...Loading</p>
          ) : (
            <div className=' relative overflow-x-auto'>
              <table className=' table-fixed w-full border text-left rtl:text-right dark:text-gray-600'>
                <thead className='text-xs border text-gray-50 uppercase bg-red-700'>
                  <tr key="">
                    <th scope='col' className='px-6 py-3 border-r'>Id</th>
                    <th scope='col' className='px-6 py-3 border-r'>userId</th>
                    <th scope='col' className='px-6 py-3 border-r'>title</th>
                    <th scope='col' className='px-6 py-3'>body</th>
                  </tr>
                </thead>
                <tbody>
                  { post?.length > 0 ? (
                    post.slice(0, 20)?.map((posts, index) => (
                      <tr key={ index } className='border dark:text-gray-100'>
                        <td className='px-6 py-3 border-r'>{ posts.id }</td>
                        <td className='px-6 py-3 border-r'>{ posts.userId }</td>
                        <td className='px-6 py-3 border-r'>{ posts.title }</td>
                        <td className='px-6 py-3 border-r'>{ posts.body }</td>
                      </tr>
                    ))
                  ) : (
                    <>
                      <p>No Data Found</p>
                    </>
                  ) }
                </tbody>
              </table>
            </div>
          ) }
        </div>
      </div>
    </section>
  )

}

export default Home