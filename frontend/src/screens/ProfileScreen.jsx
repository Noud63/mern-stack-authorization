import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { setCredentials } from "../slices/authSlice";
import { useUpdateProfileMutation } from "../slices/usersApiSlice";


const ProfileScreen = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [ updateProfile, { isLoading } ] = useUpdateProfileMutation()

  useEffect(() => {
      setName(userInfo.name)
      setEmail(userInfo.email)
  },[userInfo.name, userInfo.email])

  const submitHandler = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      toast.error("Passwords do not match!")
    }else{
      try {
        const res = await updateProfile({
          _id: userInfo._id,
          name,
          email,
          password

        }).unwrap()
        dispatch(setCredentials({...res}))
        toast.success('Profile updated!')
      } catch (error) {
        toast.error(error?.data?.message || error.message)
      }
    }
    
  };

  return (
    <FormContainer>
      <h1>Update Profile</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="name">
          <Form.Label className="text-black">Name</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="email">
          <Form.Label className="text-black">Email Address</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label className="text-black">Password</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="confirmPassword">
          <Form.Label className="text-black">Password</Form.Label>
          <Form.Control
            className="bg-transparent border-dark"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {isLoading && <Loader />}

        <Button type="submit" variant="custom" className="mt-3">
          Update
        </Button>
      </Form>

    </FormContainer>
  );
};

export default ProfileScreen;

