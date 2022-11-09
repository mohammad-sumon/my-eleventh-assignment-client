import React from 'react';
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
  useTitle('Blogs');
    return (
        <div className="text-center">
      <h3 className='my-3' style={{ color: "purple" }}>Welcome to my Blogs</h3>
      <Container className="mt-4">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What is the Difference between SQL and NoSQL?
            </Accordion.Header>
            <Accordion.Body>
              SQL databases are primarily called as Relational Databases
              (RDBMS); whereas NoSQL database are primarily called as
              non-relational or distributed database. SQL databases defines and
              manipulates data based structured query language (SQL). Seeing
              from a side this language is extremely powerful. SQL is one of the
              most versatile and widely-used options available which makes it a
              safe choice especially for great complex queries. But from other
              side it can be restrictive. SQL requires you to use predefined
              schemas to determine the structure of your data before you work
              with it. Also all of your data must follow the same structure.
              This can require significant up-front preparation which means that
              a change in the structure would be both difficult and disruptive
              to your whole system. A NoSQL database has dynamic schema for
              unstructured data. Data is stored in many ways which means it can
              be document-oriented, column-oriented, graph-based or organized as
              a KeyValue store. This flexibility means that documents can be
              created without having defined structure first. Also each document
              can have its own unique structure. The syntax varies from database
              to database, and you can add fields as you go
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What is JWT, and how does it work?
            </Accordion.Header>
            <Accordion.Body>
              JWT, or JSON Web Token, is an open standard(RFC 7519) set of
              claims to share security information or
              authorization/authentication requests between a client and a
              server. Each JWT contains encoded JSON objects. JWTs are signed
              using a cryptographic algorithm by the token’s issuer to ensure
              that No one could alter the claims after the token is issued and
              later can be used by the receiving party to verify the token. The
              JWT is divided into three parts- Header, Payload, and Signature.
              Each piece is separated from the other using a dot(.). Since the
              secret key is only available to the issuer, only it can issue new
              tokens with a valid signature. Thus, the signature ensures that
              the token hasn’t been altered.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              What is the difference between javascript and NodeJS?
            </Accordion.Header>
            <Accordion.Body>
              Javascript is a programming language that is used for writing
              scripts on the website. NodeJS is a Javascript runtime. It is
              basically used on the client-side environment. It is mostly used
              on the server-side. Finally, JavaScript is a simple programming
              language that can be used with any browser that has the JavaScript
              Engine installed. Node. js, on the other hand, is an interpreter
              or execution environment for the JavaScript programming language.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              How does NodeJS handle multiple requests at the same time?
            </Accordion.Header>
            <Accordion.Body>
              Node’s main JavaScript thread uses an event loop. When multiple
              requests are made, the first is processed while the rest are
              blocked (until the first is complete). Each request is processed
              one loop at a time until they’re all processed. The loop executes
              very quickly and you kind of have to go out of your way to create
              apps that block. There’s an important caveat to this: user
              requests (like web requests) are not the same as function
              requests. Multiple users can submit requests and they’ll be
              processed within nanoseconds of each other (not noticeable without
              tooling). This differs from a process calling the same
              function/memory space at the same time.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
    );
};

export default Blogs;