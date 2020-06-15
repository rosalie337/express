# LAB: Voting Application - Phase 2

I'm building the back-end for a Voting Application. The back-end will track 
organizations, polls, votes, users, and membership.

This lab is broken into multiple phases.

## Phase 2 Requirements

For phase 2 we will concentrate on the `Poll`, `Vote`, and `Membership` model.

## CRUD

### Poll

Create all CRUD routes for the `Poll` model. The `Poll` model should include a reference to
an organization, title, description and a list of options.

[ ] the create route will be used to create a new poll
[ ] the get all route will be used to see all polls for an organization (_id and title only)
[ ] the get by id route will be used to get details about a poll (populate organization information and total votes on poll)
[ ] the update route will be used to update a polls title and/or description
[ ] the delete route will be used to remove a poll

### Vote

Create routes for the `Vote` model. The `Vote` model should include a reference to
a poll, a reference to a user, and the option selected (as a string).

[ ] the create route will be used to create a new vote
[ ] get all votes on a poll
[ ] get all votes by a user
[ ] the update route will be used to change the voted option

### Membership

Create all CRUD routes for the `Membership` model. The `Membership` model should include a reference to
an organization and a reference to a user.

[ ] the create route will be used to create a new membership
[ ] (/api/v1/memberships?org=ORG_ID) the get all route will be used to see all users in an organization (organization: _id, title, imageUrl; user: _id, name, imageUrl)
[ ] (/api/v1/memberships?user=USER_ID) the get all route will be used to see all organizations a user is part of (organization: _id, title, imageUrl; user: _id, name, imageUrl)
[ ] the delete route will be used to remove a membership

## Testing

[ ] `supertest` to test all your routes

## Rubric

* 3 point per model and routes
* 1 points for clean code