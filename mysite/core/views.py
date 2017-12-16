from django.shortcuts import render
from django.shortcuts import render, redirect
from .forms import *
from django.http import HttpResponseRedirect,HttpResponse
from .models import *
from django.core.mail import send_mail
from templated_email import send_templated_mail

def index(request):
	if request.method == 'POST':
		contato = ContactForm(request.POST)
		if contato.is_valid:
			nome = request.POST.get('nome')
			email = request.POST.get('email')
			telefone = request.POST.get('telefone')
			comoconheceu = request.POST.get('comoconheceu')
			assunto = request.POST.get('assunto')
			mensagem = request.POST.get('mensagem')
			print(mensagem)
			send_templated_mail(
        		template_name='email',
        		from_email= email,
        		recipient_list=['gfsca@cin.ufpe.br'],
        		context={
            		'nome':nome,
            		'telefone':telefone,
            		'comoconheceu':comoconheceu,
            		'mensagem':mensagem,
            		'assunto':assunto,
        		},
			)
        
	else:
		contato = ContactForm()

	return render(request,'index.html',)