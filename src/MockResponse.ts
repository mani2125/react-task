export const loginSuccessRes = {
    "success": true,
    "data": {
      "token": "fb566635a66295da0c8ad3f467c32dcf"
    }
}

export const loginErrorRes = {
    "success": false,
    "data": {
        "message": "Access denied."
    }
}

export const ProfileData = {
    "success": true,
    "data": {
      "fullname": "Alexey Kornilov",
      "email": "alexey@klaim.ai"
    }
}

export const AuthorData = {
    "success": true,
    "data": {
        "authorId": 1,
        "name": "Charlie Chaplin"
    }
}

export const QuotesData = {
    "success": true,
    "data": {
        "quoteId": 1,
        "authorId": 1,
        "quote": "A day without laughter is a day wasted."
    }
}

export const LogoutData = {
    "success": true,
    "data": {}
   }
