from django.shortcuts import render
from django.views.generic import (
    TemplateView,
)
from .models import *

class IndexView(TemplateView):
    template_name = 'core/templates/index.html'

class contact(request)
	form_class = ContactForm

	return render(request, 'index.html', {
        'form': form_class,
    })