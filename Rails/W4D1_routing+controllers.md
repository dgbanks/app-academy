### Callbacks
  * methods called at certain moments of an object's lifecycle
  * **relational callback**:
    * if an object with a ```has_many``` association is deleted, the collection of items that belong to it should also be deleted to avoid **windowing**
    * the ```:dependent``` method has several options to navigate such situations
      * ```dependent: :destroy``` deletes objects that belong to deleted object
      * ```dependent: :nullify``` sets foreign keys of objects belonging to deleted object to null
      * ```dependent: :restrict``` raises an exception if associated objects exist, must be deleted manually
    * guarantee **referential integrity** by enforcing a foreign key constraint at the database
  * Available callbacks (methods should be set as private or protected):
    * ```before_validation``` sets forgotten fields last minute
    * ```after_initialize```, ```after_create``` provide a convenient place for logic
    * ```after_destroy``` clean-up logic
    * you can further specify situations to run and not run a callback like so:
      * ```before_validation(on: :create) do ... end```

### Delegation
### DNS
### Routing
  * **Basics**
    * starting the Rails server creates an instance of Router, which holds instances of Route defined by ```routes.rb```
    * the Router reads the URL and chooses a controller method to which the request is dispatched for processing (using a regular expression!)
    * the REST philosophy: all actions can be thought of in terms of resource CRUD operations
    * routing helper: the route name + ```_url```
    * the ```root``` method (```root to: 'posts#index'```) specifies the controller action for ```GET /```
    * a controller manages requests pertaining to a collection of resources (resource: any CRUDable thing)
  * **Nested Collections**
    * nesting ```index``` routes makes sense
    * ```create``` should always be a top-level route, but ```new``` can be nested
  * **Adding non-default routes**
    * collection

### Basic Controllers
  * the controller makes sense of the request and produces the appropriate output
  * a new Rails project creates a blank class ```ApplicationController```, which extends ```ActionController::Base```
    * all new controllers are subclasses of ```ApplicationController```
  * Rails mixes query string and request body parameter into a single hash returned by the ```ActionController::Base#params``` method
  * strong parameters:
    * the ```#permit``` of the params hash is required to whitelist nested attributes for mass assignment
