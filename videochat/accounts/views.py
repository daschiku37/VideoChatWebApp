from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.auth.views import LoginView
from . import forms

class SignUp(CreateView):
    form_class = forms.UserCreateForm
    success_url = reverse_lazy('accounts:login')
    template_name = 'registration/signup.html'
    
    def get_context_data(self,*args,**kwargs):
        context =  super().get_context_data(*args,**kwargs)
        context['form'].fields['username'].help_text = None
        context['form'].fields['password1'].help_text = None
        context['form'].fields['password2'].help_text = None
        return context
    
class Login(LoginView):
    template_name = 'registration/login.html'
    
    def get_context_data(self,*args,**kwargs):
        context =  super().get_context_data(*args,**kwargs)
        context['form'].fields['username'].label = 'Email'
        return context
    
