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
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company_id = data.get("id")
        try:
            company = Company.objects.get(pk=company_id)
            company.name = data.get("name", company.name)
            company.description = data.get("description", company.description)
            company.city = data.get("city", company.city)
            company.address = data.get("address", company.address)
            company.save()
            return JsonResponse({'message': 'Company updated successfully'})
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company does not exist'}, status=404)
    elif request.method == 'DELETE':
        data = json.loads(request.body)
        company_id = data.get("id")
        try:
            company = Company.objects.get(pk=company_id)
            company.delete()
            return JsonResponse({'message': 'Company deleted successfully'})
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company does not exist'}, status=404)


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
    elif request.method == 'DELETE':
        data = json.loads(request.body)
        vacancy_id = data.get("id")
        try:
            vacancy = Vacancy.objects.get(pk=vacancy_id)
            vacancy.delete()
            return JsonResponse({'message': 'Vacancy deleted successfully'})
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy does not exist'}, status=404)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy_id = data.get("id")
        try:
            vacancy = Vacancy.objects.get(pk=vacancy_id)
            vacancy.name = data.get("name", vacancy.name)
            vacancy.description = data.get("description", vacancy.description)
            vacancy.salary = data.get("salary", vacancy.salary)
            company_id = data.get("company_id")
            if company_id is not None: 
                company = Company.objects.get(id=company_id)
                vacancy.company = company
            vacancy.save()
            return JsonResponse({'message': 'Vacancy updated successfully'})
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy does not exist'}, status=404)

@csrf_exempt
def vacancy_detail(request, vacancy_id):

    vacancy = get_object_or_404(Vacancy, id=vacancy_id)
    
    data = {
        'name': vacancy.name,
            'description': vacancy.description,
            'salary': vacancy.salary,
            'company': vacancy.company.name
        }
    return JsonResponse(data)

    

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