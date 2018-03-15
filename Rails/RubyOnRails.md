## Ruby on Rails
* MVC framework
  * **model**: concerned with the retrieval of data from storage, as well as any operations performed on it
  * **view**: presents the data
  * **controller**: constructs server's HTTP responses and acts as the interface between models and views
* Convention over Configuration
  * the default configuration is already programmed into the framework
* Representational State Transfer (REST)
  * an architectural style for web services that allows access to web resources via standard HTTP verbs (GET, POST, PATCH, DELETE)
    * with proper resource identifiers, each of these operations should have a predictable and standardized result
  * stateless; the server does not retain any data between request/response cycles
    * data can be cached client-side, however
  * the ```resources``` method generates routes by linking verbs and URIs to controller actions
* Key Components
  * **ActiveRecord**
    * Rails' Object Relational Mapping (ORM)
    * allows data in a database to be represented as Ruby objects (models), which all inherit from ActiveRecord
    * contains a number of methods for implementing CRUD and making queries
  * **ActionController**
    * handles the logic all other controllers inherit
    * allows for access to cookies (small amounts of data about the session)
    * protects from CSRF attacks, checks for authenticity tokens
  * **ActionView**
    * renders the views
    * supports several file types: .erb, .jbuilder, etc.
  * **Rack**
    * middleware between the rails router and the web server (WEBrick or Puma)
    
### Environment and Configuration
### Routing and REST
### Controllers
### ActiveRecord and Models
### Helpers
### Ajax
### Session Management
### Caching and Performance
### Database Migrations
### Security
