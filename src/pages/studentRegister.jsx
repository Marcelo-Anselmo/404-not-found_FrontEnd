import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import FormStudent from "../components/FormStudent/formStudent";
import Header from "../components/Header/Header";

const StudentRegister = () => {
    const { id } = useParams();

    return (
        <div>
            <Header />
            <FormStudent id={id} />
            <Footer />
        </div>
    );
};

export default StudentRegister;
