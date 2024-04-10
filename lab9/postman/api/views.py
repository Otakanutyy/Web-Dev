import json
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Company, Vacancy
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        if companies.exists(): 
            data = {'companies': list(companies.values())}
            return JsonResponse(data)
        else:
            return JsonResponse({'error': 'Companies list is empty'})
    elif request.method == 'POST':
        data = json.loads(request.body)
        print("Data received:", data)
        company = Company.objects.create(name=data.get("name"), description = data.get("description"),
                                          city = data.get("city"), address = data.get("address"))
        return JsonResponse(company.to_json())


def company_detail(request, company_id):
    try:
        company = get_object_or_404(Company, id=company_id)
        data = {
            'company': {
                'name': company.name,
                'description': company.description,
                'city': company.city,
                'address': company.address,
            }
        }
        return JsonResponse(data)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company does not exist'}, status=404)

@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        if vacancies.exists(): 
            data = {'vacancies': list(vacancies.values())}
            return JsonResponse(data)
        else:
            return JsonResponse({'error': 'No vacancies available'})
    elif request.method == 'POST':
        data = json.loads(request.body)
        company_id = data.get("company_id")
        company = Company.objects.get(id=company_id)

        vacancy = Vacancy.objects.create(
            name=data.get("name"),
            description=data.get("description"),
            salary=data.get("salary"),
            company = company
        )
        return JsonResponse(vacancy.to_json())

@csrf_exempt
def vacancy_detail(request, vacancy_id):

    vacancy = get_object_or_404(Vacancy, id=vacancy_id)
    if request.method == 'GET':
        try:
            data = {
                'name': vacancy.name,
                'description': vacancy.description,
                'salary': vacancy.salary,
                'company': vacancy.company.name
            }
            print(vacancy.to_json())
            return JsonResponse(data)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy does not exist'}, status=404)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company_id = data.get("company_id")
        company = Company.objects.get(id=company_id)
        vacancy = Vacancy.objects.create(
            name=data.get("name"),
            description=data.get("description"),
            salary=data.get("salary"),
            company = company
        )
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    

def company_vacancies(request, company_id):
    try:
        company = get_object_or_404(Company, id=company_id)
        vacancies = company.vacancy_set.all() 
        data = {
            'company': company.name,
            'vacancies': list(vacancies.values())
        }
        return JsonResponse(data)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company does not exist'}, status=404)
    
def vacancy_top(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]  # Retrieve top ten vacancies by salary
    data = {
        'vacancies': list(vacancies.values())
    }
    return JsonResponse(data)