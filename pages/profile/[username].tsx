
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import List from '../../components/List';
import { useRouter } from "next/router";
import prisma from '../../lib/prisma';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const userid: number = cookies.get('userid');

export default function Profile({ users, listname }) {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap');
    }, []);

    const router = useRouter();
    const { username } = router.query;
    var user = users.find(({ id }) => id == userid);

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
                                <List listname={listname} />
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
                                <List listname={listname} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export const getServerSideProps = async () => {
    const users = await prisma.user.findMany();

    const listname = await prisma.category.findMany();

    return { props: { users, listname } };
};