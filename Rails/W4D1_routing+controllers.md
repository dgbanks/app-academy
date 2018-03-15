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
  * **Nested Controllers**
  * **Adding non-default routes**
### Basic Controllers
### JSON API
