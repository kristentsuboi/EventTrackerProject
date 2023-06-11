# EventTrackerProject

# Overview
My project is a vacation tracker. It will allow users to enter information about past vacations with full CRUD using REST. This application uses Javascript to access data and manipulate the DOM.
## Expected Routes
<table>
  <tr>
    <th><strong>Return Type</strong></th>
    <th><strong>Route</strong></th>
    <th><strong>Functionality</strong></th>
  </tr>
  <tr>
    <td><code>List< Vacation ></code></td>
    <td><code>GET api/vacations</code></td>
    <td>Gets all vacations</td>
  </tr>
  <tr>
    <td><code>Vacation</code></td>
    <td><code>GET api/vacations/{vacaId}</code></td>
    <td>Gets single vacation</td>
  </tr>
    <tr>
      <td><code>Vacation</code></td>
      <td><code>POST api/vacations</code></td>
    <td>Adds a single vacation</td>
  </tr>
    <tr>
      <td><code>Vacation</code></td>
      <td><code>PUT api/vacations/{vacaId}</code></td>
    <td>Updates a vacation</td>
  </tr>
     <tr>
       <td><code>boolean</code></td>
       <td><code>DELETE api/vacations/{vacaId}</code></td>
    <td>Deletes a vacation</td>
  </tr>
   <tr>
     <td><code>List< Comment ></code></td>
     <td><code>GET api/vacations/{vacaId}/comments</code></td>
    <td>Returns a list of comments for that vacation id.</td>
  </tr>
   <tr>
     <td><code>Comment</code></td>
     <td><code>POST api/vacations/{vacaId}/comments</code></td>
    <td>Add comment to a vacation by id</td>
  </tr>
   <tr>
     <td><code>void</code></td>
     <td><code>DELETE api/vacations/{vacaId}/comments/{commentId}</code></td>
    <td>Deletes a comment</td>
  </tr>
</table>

## Accessing the project
-insert link

## Entity Relationship Model
![Screenshot](EHR.png)

## JSON Example
<code>
  {
  "country": "Netherlands",
        "province": "Amsterdam",
        "imageUrl": "https://cdn.britannica.com/30/180130-138-4FC01CDD/Overview-Amsterdam.jpg?w=800&h=450&c=crop",
        "description": "fun"
  }
  </code>

# Technologies Used
- RESTful Services
- Java
- Spring
- Hibernate
- Spring Data JPA
- Spring Boot
- MySQL 
- Postman
- Javascript
- DOM
- Bootstrap

# Lessons Learned
This project has allowed me to solidify my JPA knowledge by building entities for this project. I used a REST service to access database objects. I also solidified my understanding on HTTP Requests/Responses. Testing in Postman was pretty simple. Javascript was extremely intimidating for some reason, but using js to build the front end of this application was very comfortable. 


