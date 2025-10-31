import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Field,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactPage = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);
      if (response.type === 'success') {
        formik.resetForm();
      }
    }
  }, [response], isLoading);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("https://example.com/contactme", values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Required"),
      comment: Yup.string().required("Required").min(25, "Must be at least 25 characters"),
    }),
  });

  return (
    <VStack w="1024px" p={32} alignItems="flex-start">
      <Heading as="h1" id="contactme-section">
        Contact me
      </Heading>
      <Box p={6} rounded="md" w="100%">
        <form onSubmit={(e) => {
          e.preventDefault()
          formik.handleSubmit()
        }}>
          <VStack spacing={4}>
            <Field invalid={formik.touched.firstName && formik.errors.firstName}>
              <Field.Label htmlFor="firstName">Name</Field.Label>
              <Input
                id="firstName"
                name="firstName"
                {...formik.getFieldProps('firstName')}
              />
              <Field.ErrorText>{formik.errors.firstName}</Field.ErrorText>
            </Field>
            <Field invalid={formik.touched.email && formik.errors.email}>
              <Field.Label htmlFor="email">Email Address</Field.Label>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
              />
              <Field.ErrorText>{formik.errors.email}</Field.ErrorText>
            </Field>
            <Field invalid={formik.touched.type && formik.errors.type}>
              <Field.Label htmlFor="type">Type of enquiry</Field.Label>
              <Select id="type" name="type" {...formik.getFieldProps('type')}>
                <option value="hireMe">Freelance project proposal</option>
                <option value="openSource">
                  Open source consultancy session
                </option>
                <option value="other">Other</option>
              </Select>
              <Field.ErrorText>{formik.errors.type}</Field.ErrorText>
            </Field>
            <Field invalid={formik.touched.comment && formik.errors.comment}>
              <Field.Label htmlFor="comment">Your message</Field.Label>
              <Textarea
                id="comment"
                name="comment"
                height={250}
                {...formik.getFieldProps('comment')}
              />
              <Field.ErrorText>{formik.errors.comment}</Field.ErrorText>
            </Field>
            <Button
              type="submit"
              colorScheme="purple"
              width="full"
              isLoading={isLoading}
            >
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </VStack>
  );
};

export default ContactPage;
