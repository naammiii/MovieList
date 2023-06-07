
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import List from '../../components/List';
import { useRouter } from "next/router";
import prisma from '../../lib/prisma';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const userid: number = cookies.get('userid');

export default function Profile(users) {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    const router = useRouter();
    const { username } = router.query;

    var user = users.users.find(({ id }) => id == userid);

    if (user && user.username == username) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">User Information</h5>
                                    <div className="card-text">
                                        <p><strong>Name:</strong> {user.username}</p>
                                        <p><strong>Password:</strong> Change password</p>
                                    </div>
                                    <hr />
                                </div>
                                <List />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
    else {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">User Information</h5>
                                    <div className="card-text">
                                        <p><strong>Name:</strong> username</p>
                                    </div>
                                    <hr />
                                    <p className="text-center">Thank you for visiting!</p>
                                </div>
                                <List />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // if(user && user.username == username){
    // return(
    //     <>
    //     <div className="container">
    //     <div className="row">
    //         <div className="col-md-6 offset-md-3">
    //             <div className="card">
    //                 <div className="card-body">
    //                     <h5 className="card-title">User Information</h5>
    //                     <div className="card-text">
    //                         <p><strong>Name:</strong> {user.username}</p>
    //                         <p><strong>mode:</strong> edit</p>
    //                         <p><strong>Phone:</strong> 123-456-7890</p>
    //                     </div>
    //                     <hr />
    //                     <p className="text-center">Thank you for visiting!</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    //     </>
    // );
    // }else{
    //     return(
    //         <>
    //         <div className="container">
    //         <div className="row">
    //             <div className="col-md-6 offset-md-3">
    //                 <div className="card">
    //                     <div className="card-body">
    //                         <h5 className="card-title">User Information</h5>
    //                         <div className="card-text">
    //                             <p><strong>Name:</strong> username</p>
    //                             <p><strong>mode:</strong> view</p>
    //                             <p><strong>Phone:</strong> 123-456-7890</p>
    //                         </div>
    //                         <hr />
    //                         <p className="text-center">Thank you for visiting!</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //         </>
    //     );
    // 
    // }
}

// async function getUsers() {
//     const response = fetch('/api/get/getUsers', {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' }
//     });

//     const users = (await response).json();
//     return users;

// }

// async function editMode(username) {

//     let result;

//     await getUsers().then((users) => {
//         console.log(users);
//         const user = users.find(({ id }) => id == userid);
//         if (user && user.username == username) {
//             result = true;
//         } else {
//             result = false;
//         }
//     })

//     return await result;
// }


export const getServerSideProps = async () => {
    const users = await prisma.user.findMany();


    return { props: { users } };
};