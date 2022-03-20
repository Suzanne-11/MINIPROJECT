from sqlite3 import Timestamp
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.six import text_type

class AppTokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self,user,timestap):
        return (text_type(user.is_activate)+text_type(user.pk)+text_type(timestamp))

token_generator=AppTokenGenerator()
