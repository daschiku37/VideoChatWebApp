from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

app_name = 'accounts'

urlpatterns = [
    path('signup/',views.SignUp.as_view(),name='signup'),
    path('login/',views.Login.as_view(),name = 'login'),
    path('logout/',LogoutView.as_view(),name='logout'),
]