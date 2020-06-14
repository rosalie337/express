# LAB: Voting Application - Phase 1

Back-end voting Application. The back-end track organizations, polls, votes, users, and membership.

## Phase 1 Requirements

For Phase 1 we will concentrate on the `Organization` and `User` model.

### Organization

Created all CRUD routes for the `Organization` model and `Organization` model will include
a title, description, and imageUrl.

[x] create route will be used when a new organization is created
[x] get all route will be used to see all organizations (_id, title, and imageUrl of organization only)
[x] get by id route will be used to get details about an organization
[x] update route will be used to update organization information
[x] delete route will be used if an organization is disbanded

### User

[x]Created routes for the `User` model. The`User` model should include a name, phone, email, communicationMedium (phone or email), and imageUrl.

[x] get by id route will be used to get details about a user
[x] update route will be used to update a user
[x] delete route will be used if a user chooses to leave the platform

## Testing

* `supertest` used to test all routes

## Rubric

* 1 point per route
* 1 point for clean code