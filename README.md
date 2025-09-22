# task-1

Single Responsibility principle: the Notification class handles more than one thing.

Open Closed Principle: if we wanted to add another notification channel we would have to change the class.

Liskov Substitution Principle: is NOT violated as there is no subclass which can inherit from parent class.

Interface Segregation Principle: Notification has many method parameters it may not use.

Dependency Inversion Principle: The high-level class Notification depends on low-level details.
