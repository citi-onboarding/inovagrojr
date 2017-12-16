from django import forms

class ContactForm(forms.Form):
    contact_name = forms.CharField(required=True)
    contact_email = forms.EmailField(required=True)
    contact_cellphone = forms.CharField(required=True)
    contact_metInovagro = forms.CharField(required = True)
    contact_about = forms.CharField(required = True)
    content = forms.CharField(required=True)